import React from 'react';



class Collapse extends React.Component {

  constructor() {
    super();

    this.state = {
      showContent: false
    }
    
    // this.showMore = this.showMore.bind(this)

  }

  // showMore(){
    // this.setState({showContent: true})
    //  }

   showMore = () => {
     this.setState ({showContent: !this.state.showContent})
   }


  render() {
    return (
      //   <div>
      //   <a class="btn btn-warning" data-bs-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
      //     Click
      //   </a> 

      // <div class="collapse show" id={this.props.href}>
      //   <div class="card card-body">
      //     {this.props.children}
      //     {this.state.showContent}
      //   </div>
      // </div>
      //   </div>


      <div>
        <button class="btn btn-warning" onClick={this.showMore}>
          Click
        </button>

        {
          this.state.showContent ? (

            <div class="collapse show">
              <div class="card card-body">
                {this.props.children}
              </div>
            </div>


          ) : null
        }
      </div>
    );
  };
}


export default Collapse

