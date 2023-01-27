import React from "react";

const Notes = (props) => {
  return (
    <>
      
      {/* notes */}
      <section className="mb-5">
        <p className="lg:w-1/2 text-justify">{props.note}</p>
      </section>
      {/* end notes */}
    </>
  );
};

export default Notes;
