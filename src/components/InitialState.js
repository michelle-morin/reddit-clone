import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();

const InitialState = {
  masterPostList: {
    [id1]: {
      title: "Cats are cool",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      upvote: 3,
      downvote: 2,
      postDate: 1588105367958,
      id: id1
    },
    [id2]: {
      title: "My dog is cuter than your cat",
      body:
        "Astrodonius Xuanhanosaurus Giganotosaurus Tendaguria Pinacosaurus Kaatedocus Troodon Dracopelta Coeluroides Banji Pterospondylus Agujaceratops Basutodon Epichirostenotes Nanosaurus Tawa Piveteausaurus Telmatosaurus Austrocheirus Herrerasaurus Stygivenator Sonidosaurus Protiguanodon Tatankaceratops Hypacrosaurus Angolatitan Europasaurus Yandusaurus Cruxicheiros Turiasaurus",
      upvote: 10,
      downvote: 2,
      postDate: 1588105396294,
      id: id2
    },
    [id3]: {
      title: "Check out this bird video",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum. Facilisis gravida neque convallis a cras. Est ullamcorper eget nulla facilisi. Vitae nunc sed velit dignissim sodales. Netus et malesuada fames ac turpis egestas integer eget aliquet. Suscipit adipiscing bibendum est ultricies. Varius sit amet mattis vulputate. Sit amet consectetur adipiscing elit pellentesque habitant. Vehicula ipsum a arcu cursus. Sit amet mattis vulputate enim nulla. Nisi est sit amet facilisis magna etiam tempor orci eu. Morbi non arcu risus quis varius. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.",
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
