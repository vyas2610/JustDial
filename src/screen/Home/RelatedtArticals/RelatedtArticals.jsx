import React from "react";
import img from "./../../../images/articls.jpg";

const RelatedtArticals = () => {
  return (
    <>
      <div className=" container flex bg-white mx-auto p-5 flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold">Related Articals</h1>
        </div>
        <div>
          <div className="flex gap-7 ">
            <div className="border rounded p-2">
              <img src={img} alt="" className="wrap" />
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia vero assumenda ab reiciendis voluptatum saepe sint
                unde, nihil asperiores porro ducimus illum minus quod illo sunt
                fugiat? Sit, earum itaque? Voluptates quod dignissimos debitis
                minima excepturi, aliquam beatae aut, fuga, iste dolor nihil
                facilis ex hic quos perferendis. Adipisci repellendus eius
                beatae eveniet ad molestiae iusto. Fugit dolores recusandae
                reiciendis?
              </p>
            </div>
            <div className="border rounded p-2">
              <img src={img} alt="" className="wrap" />
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia vero assumenda ab reiciendis voluptatum saepe sint
                unde, nihil asperiores porro ducimus illum minus quod illo sunt
                fugiat? Sit, earum itaque? Voluptates quod dignissimos debitis
                minima excepturi, aliquam beatae aut, fuga, iste dolor nihil
                facilis ex hic quos perferendis. Adipisci repellendus eius
                beatae eveniet ad molestiae iusto. Fugit dolores recusandae
                reiciendis?
              </p>
            </div>
            <div className="border rounded p-2">
              <img src={img} alt="" className="wrap" />
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia vero assumenda ab reiciendis voluptatum saepe sint
                unde, nihil asperiores porro ducimus illum minus quod illo sunt
                fugiat? Sit, earum itaque? Voluptates quod dignissimos debitis
                minima excepturi, aliquam beatae aut, fuga, iste dolor nihil
                facilis ex hic quos perferendis. Adipisci repellendus eius
                beatae eveniet ad molestiae iusto. Fugit dolores recusandae
                reiciendis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedtArticals;
