import React, {Component} from 'react';

class RenderArray extends Component {
    render() {
        const data = [{
            firstname: "Juan",
            lastname: "De la Cruz",
            age: 21
        }, 
        {
            firstname: "Mark",
            lastname: "Paul",
            age: 22
        }, 
        {
            firstname: "Paul",
            lastname: "Mark",
            age: 23
        }];

        const listItems = data.map((d) => <ul key={d.firstname}>{d.firstname}{" "}{d.lastname}{" "}{d.age}</ul>);

        return (
            <div>
                <center>
                    <h1>Render Array</h1>
                    {listItems}
                </center>
            </div>
        )
    }
}
    
export default RenderArray;