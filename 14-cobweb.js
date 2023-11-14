var theCobWeb = {
  item: 'ggggg',
  Web: {
    item: "comb",
    Web: {
      item: "glasses",
      Web: {
        item: "toothbrush",
        Web: {
          item: "toenails"
        }
      }
    }
    
  }
};



  const renderTreeElements = (data) => {


    return `<div style="margin-left:40px">
      <div>${data.item}</div>
      <div>${
        data.Web ? renderTreeElements(data.Web) : ""
      }</div>
      </div>
      `;
  
    
  };
  
  document.querySelector("#demo").innerHTML = renderTreeElements(theCobWeb);


