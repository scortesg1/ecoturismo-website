interface CarouselItem {
  documentId: string;
  image: {
    url: string;
  };
  title: string;
  description: string;
  price: number;
  location: string;
  heading: string;
  video: {
    url: string
  };
  coordinates: {
    lat: string;
    lng: string;
  };
  photos:{
    url: string
  }[];
  servicios:{
    id: number;
    name: string;
  }[];
}
const prefixMedia = "http://localhost:1337";

const adaptItem = (item: CarouselItem) => ({
  id: item.documentId,
  image: prefixMedia + item.image.url,
  title: item.title,
  description: item.description,
  price: item.price,
  location: item.location,
  heading: item.heading,
  video_url: prefixMedia + item.video.url,
  coordinates: `${item.coordinates.lat}, ${item.coordinates.lng}`,
  photos: item.photos.map((photo) => prefixMedia + photo.url),
  includes: item.servicios.map((servicio) => ({
    id: servicio.id,
    name: servicio.name,
  })),
});

export const adaptCarouselData = (dataFromApi: CarouselItem | CarouselItem[]) => {
  if (Array.isArray(dataFromApi)) {
    return dataFromApi.map(adaptItem);
  } else {
    return adaptItem(dataFromApi);
  }
};

// export const adaptCarouselData = (dataFromApi: CarouselItem[]) => {
//   return dataFromApi.map((item) => ({
//       id: item.documentId,
//       image: prefixMedia + item.image.url,
//       title: item.title,
//       description: item.description,
//       price: item.price,
//       location: item.location,
//       heading: item.heading,
//       video_url: prefixMedia + item.video.url,
//       coordinates: `${item.coordinates.lat}, ${item.coordinates.lng}`,
//       photos: item.photos.map(photo => prefixMedia + photo.url),
//       includes: item.servicios.map((servicio, index) => ({
//         id: servicio.id,
//         name: servicio.name,
//       })),
//   }));
// };


