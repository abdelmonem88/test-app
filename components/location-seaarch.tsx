"use client";

import Autocomplete from "react-google-autocomplete";

const LocationSearch = () => {
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto w-full">
      <Autocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
        onLoad={(autocomplete) => {
          console.log(autocomplete);
        }}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        className="w-full"
        placeholder="Search for a location"
        style={{
          width: "100%",
          height: "50px",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
        onError={(error) => {
          console.log(error);
        }}
        options={{
          types: ["geocode"],
        }}
      />
    </div>
  );
};

export default LocationSearch;
