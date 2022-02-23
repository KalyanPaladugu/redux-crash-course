import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'
import { buyLaptop, buyMobile, fetchUsers } from '../redux/actions'

class Shop extends Component {

//    state ={
//        numOfLaptops:100
//    }
// buyLaptop=()=>{
//     this.setState({
//        numOfLaptops:this.state.numOfLaptops-1 
//     })
// }

  render() {
    return (
      <div>
          <h1 className='title'>Welcome to Killer Shop</h1>
         <div className='items'>
            <div className='item'>
                <p>Dell Inspiron Laptop</p>
                <p>AvailableCount :{this.props.numOfLaptops}</p>
                <button onClick={this.props.buyLaptop}>Buy</button>
            </div>

            <div className='item'>
                <p>Samsung A50 Mobile</p>
                <p>AvailableCount :{this.props.numOfMobiles}</p>
                <button onClick={this.props.buyMobile}>Buy</button>
            </div>

            <div className='item'>
                <p>Get users data</p>
                <p>Count: :{this.props.users.length}</p>
                <button onClick={this.props.fetchUsers}>Call API</button>
            </div>


        </div>
      </div>
    )
  }
}

const mapStateProps=(state)=>{
    return {
        numOfLaptops:state.laptops.numOfLaptops,
        numOfMobiles:state.mobiles.numOfMobiles,
        users:state.users.users
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buyLaptop:()=> dispatch(buyLaptop()),
        buyMobile:()=>dispatch(buyMobile()),
        fetchUsers:()=> dispatch(fetchUsers())
    }
}
export default connect(mapStateProps,mapDispatchToProps)(Shop)