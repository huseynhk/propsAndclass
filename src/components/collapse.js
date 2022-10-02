import React from 'react';



const Collapse = (props) => {
return (
  <div>
    
  <a class="btn btn-warning" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
    Click
  </a> 
 
<div class="collapse show" id={props.href}>
  <div class="card card-body">
    {props.children}
  </div>
</div>
  </div>
);
};

export default Collapse

