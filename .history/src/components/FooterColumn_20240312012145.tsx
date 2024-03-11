import React from "react";

const FooterColumn = ({ title }: any) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">Title</h4>
      <ul className="flex flex-col gap-2 font-normal"></ul>
    </div>
  );
};

export default FooterColumn;
