import { useSuspenseQuery } from '@tanstack/react-query'
import {photosQueryOptions} from '@/db/queries'
import {PhotoType} from '@/types'

export function Gallery() {
  const photos: PhotoType = useSuspenseQuery(photosQueryOptions())
	return (
	  <>
	  <div>Hello "/gallery/ route"!</div>
	  <ul>
	  {photos.map((photo) => {
	    return (
	    <li key={photo.id} >
	    <div>{photo.title}</div>
	    <img 
	      src={photo.src} 
	      width={photo.width} 
	      height={photo.height}
	      alt={photo.title}
	    />
	    </li>
	   ) 
	  })}
	  </ul>
	  </>
	 ) 
}
