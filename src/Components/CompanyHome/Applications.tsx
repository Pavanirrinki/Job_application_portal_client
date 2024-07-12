import React, { useContext, useState } from "react";
import "./Applications.css";
import Table from "../../Containers/MuiComponents/Table";

type Props = {
  setJobId:any;
};

export const Applications = (props: Props) => {


  return (
    <div className=" rounded  mt-5 mb-5 ">
      <Table setJobId={props.setJobId}/>
    </div>
  );
};
