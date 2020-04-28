import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();

const InitialState = {
  masterPostList: {
    [id1]: {
      title: "Cats are cool",
      body:
        "Astrodonius Xuanhanosaurus Giganotosaurus Tendaguria Pinacosaurus Kaatedocus Troodon Dracopelta Coeluroides Banji Pterospondylus Agujaceratops Basutodon Epichirostenotes Nanosaurus Tawa Piveteausaurus Telmatosaurus Austrocheirus Herrerasaurus Stygivenator Sonidosaurus Protiguanodon Tatankaceratops Hypacrosaurus Angolatitan Europasaurus Yandusaurus Cruxicheiros Turiasaurus",
      upvote: 3,
      downvote: 2,
      postDate: 1588105367958,
      id: id1
    },
    [id2]: {
      title: "Cats be like, WHAT!?!",
      body:
        "Astrodonius Xuanhanosaurus Giganotosaurus Tendaguria Pinacosaurus Kaatedocus Troodon Dracopelta Coeluroides Banji Pterospondylus Agujaceratops Basutodon Epichirostenotes Nanosaurus Tawa Piveteausaurus Telmatosaurus Austrocheirus Herrerasaurus Stygivenator Sonidosaurus Protiguanodon Tatankaceratops Hypacrosaurus Angolatitan Europasaurus Yandusaurus Cruxicheiros Turiasaurus",
      upvote: 10,
      downvote: 2,
      postDate: 1588105396294,
      id: id2
    },
    [id3]: {
      title: "Fat Cats are the greatest",
      body:
        "Astrodonius Xuanhanosaurus Giganotosaurus Tendaguria Pinacosaurus Kaatedocus Troodon Dracopelta Coeluroides Banji Pterospondylus Agujaceratops Basutodon Epichirostenotes Nanosaurus Tawa Piveteausaurus Telmatosaurus Austrocheirus Herrerasaurus Stygivenator Sonidosaurus Protiguanodon Tatankaceratops Hypacrosaurus Angolatitan Europasaurus Yandusaurus Cruxicheiros Turiasaurus",
      upvote: 1,
      downvote: 2,
      postDate: 1588105407252,
      id: id3
    }
  },
  selectedPost: null,
  formVisible: false
};

export default InitialState;
