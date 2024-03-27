// import ListGroup from "./components/ListGroup";
// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/button";
// import Icon from "./components/Icon";
// import Aru from "./components/Aru";
// import Test from "./components/Test";
// import Nav from "./components/Nav";
// import Cart from "./components/cart";
// import { useState } from "react";
// import Expandable from "./components/Expandable";
import TodoList from "./components/TodoList";
import Add from "./components/Add";
import Edit from "./components/Edit";
import UseEffect from "./components/UseEffect";
// import Form from "./components/Form";
import Cal from "./components/Cal";

function App() {
  // FOR LIST
  // let items = ["ak", "bk", "ck", "pk"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertvisible , setAlertVisibility] = useState(false)

  // FOR NAV-BAR  CART-ITEM UPDATE
  // const [cartItems , setCartItems] = useState(['ak','bk'])

  return (
    // FOR LIST
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>


    // FOR ALRET
    // <div>
    // <Alert>
    //   <h1>
    //     hai
    //   </h1>
    // </Alert>
    // </div>


    // AN ALTER BOX
    // <div>
    // {alertvisible && <Alert onclose={()=>setAlertVisibility(false)}>
    //    <h1>
    //       hai
    //    </h1>
    //  </Alert>  }
    //  <Button  onClick ={() => setAlertVisibility(true)}  >
    //     My button
    //   </Button>
    // </div>


    // FOR ICON
    // <div>
    //   <Icon onclick={() => console.log("clicked")} />
    // </div>


    // FOR ADD, REMOVE, UPDATE
    // <div>
    //   <Aru/>
    // </div>


    // FOR BUG EXAMPLE
    // <div>
    //   <Test/>
    // </div>
    

    // FOR NAV-BAR  CART-ITEM UPDATE
    // <div>
    //   <Nav cartItems={cartItems.length} />
    //   <Cart cartItems={cartItems} onClear={()=> setCartItems([])}/>
    // </div>
   

    // FOR Expand
    // <div>
    //   <Expandable>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur assumenda dolor non a, qui dolores, eveniet quae harum sint quo. Sit, necessitatibus tempora dolor accusamus expedita consectetur unde voluptatem maiores, ea velit vitae officia reprehenderit dolorum saepe beatae repellat laudantium. Officia ipsum quidem omnis expedita autem hic natus laboriosam sint dolores dolorem dolor eaque numquam voluptatibus debitis possimus impedit vel, molestiae iste totam cumque beatae nulla porro. Consectetur saepe ratione nostrum repudiandae veritatis nihil officia doloremque? Tenetur repellat perspiciatis ut impedit harum recusandae dolores eveniet commodi animi, officiis nemo vero omnis dolorem labore maiores. Nulla molestiae harum soluta deserunt!
    //   </Expandable>
    // </div>


  //  FOR FORM VALIDATION
    // <div>
    //   <Form/>
    // </div>


    // FOR TO DO LIST
    // <div>
    //   <TodoList/>
    // </div>


    // FOR EDIT
    // <div>
    //   <Edit/>
    // </div>


    // FOR ADD
    // <div>
    //   <Add/>
    // </div>


    // FOR USE EFFECT 
    // <div>
    // <UseEffect/>
    // </div>


    <div>
       <Cal/>
    </div>
  );
}

export default App;
