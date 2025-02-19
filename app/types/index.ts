import { z } from 'zod';

export const PhotoSchema = z.object(
  {
  	id: z.number(), 
	  title: z.string(), 
	  height: z.number(), 
	  width: z.number(), 
	  src: z.string()
});

export type PhotoType = z.infer<typeof PhotoSchema>; 