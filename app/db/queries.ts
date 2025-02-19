import db from '@/db'
import { PhotoType, PhotoSchema } from '@/types'

export const fetchPhotos = createServerFn({ method: 'GET' })
  .handler(async (): Promise<PhotoType[]> => {
    console.info(`Fetching photos`)
    const photos = await db.select().from('photos'); 
    return PhotoSchema.array().parse(photos)
    
  });
  
export const photosQueryOptions = (): QueryOptions<PhotoType[]> =>  queryOptions({
  queryKey: ['photos'], 
  queryFn: () => fetchPhotos(), 
})

const filterSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  src: z.string().optional(),
  key: z.string().optional(),
}).refine((data) => Object.keys(data).length > 0, {
  message: 'At least one filter (id, title, src, or key) must be provided.',
});

export const fetchPhotoBy = createServerFn({ method: 'GET'})
.validator(filterSchema)
  .handler(async ({ data }) => {
    console.info(`Fetching photo with filters: ${JSON.stringify(data)}...`);
    
    try {
      // Build the Drizzle query dynamically based on provided filters
      const query = db.select().from(photos);
      
      if (data.id) query.where(photos.id.eq(data.id));
      if (data.title) query.where(photos.title.eq(data.title));
      if (data.src) query.where(photos.src.eq(data.src));
      if (data.key) query.where(photos.key.eq(data.key));
      
      const result = await query.execute();
      
      if (result.length === 0) {
        throw notFound();
      }
      
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
    

  
 