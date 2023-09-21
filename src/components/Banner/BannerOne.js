const BannerOne = ({imgPaht}) => {
  return (
    <div style={{ width: "100%", overflow: "hidden", height: "300px" }}>
      <img
        src={imgPaht}
        alt="Banner"
        style={{
          width: "100%",
          height: "300px", // Keep the height fixed
          objectFit: "cover", // This ensures the image covers the entire space without being stretched
          objectPosition: "center", // This centers the image
        }}
      />
    </div>
  );
};

export default BannerOne;
