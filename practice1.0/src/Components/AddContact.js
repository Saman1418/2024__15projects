import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    add = (e) => {
        e.preventDefault()
        if (this.state.name === "" || this.state.email === "") {
            alert("Enter the field")
            return
        }
        this.props.addContactHandler(this.state)
        console.log(this.state)
        this.setState({ name: "", email: "" })

    }
    render() {
        return (
            <>
                <form onSubmit={this.add}>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputName" value={this.state.name} onChange={e => this.setState({name:e.target.value})} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={e =>this.setState({email:e.target.value})} />
                    </div>


                    <button type="submit" class="btn btn-primary">ADD</button>
                </form>
            </>


        )

    }

}
export default AddContact;

// import React,{useState} from 'react'

// const AddContact = ({addContectHandler}) => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const add = (e)=>{
//         e.preventDefault()
//         if (name==="" || email===""){
//             alert("Enter the field")
//             return
//         }
//         addContectHandler(name,email)
//         console.log(name,email)
//         setName("")
//         setEmail("")
//     }
//     return (
//         <>
//             <form onSubmit = {add}>
//                 <div class="mb-3">
//                     <label for="exampleInputName" class="form-label">Name</label>
//                     <input type="text" class="form-control" id="exampleInputName" value = {name} onChange = {(e)=>{setName(e.target.value)}} />
//                 </div>

//                 <div class="mb-3">
//                     <label for="exampleInputEmail1" class="form-label">Email address</label>
//                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value = {email} onChange = {(e)=>{setEmail(e.target.value)}}/>
//                 </div>


//                 <button type="submit" class="btn btn-primary">ADD</button>
//             </form>
//         </>
//     )
// }

// export default AddContact;
