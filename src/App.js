import ImageLoader from "./ImageLoader";
import EmptyUser from "./EmptyUser.svg";
import "./styles.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        flexWrap: "wrap"
      }}
    >
      <div
        style={{
          width: "100%"
        }}
      >
        <h2>Loader and cropper image</h2>
      </div>
      <div
        style={{
          width: "100%"
        }}
      >
        <ImageLoader
          size={155}
          image={EmptyUser}
          callback={(image) => console.log(image)}
        />
      </div>
    </div>
  );
}
