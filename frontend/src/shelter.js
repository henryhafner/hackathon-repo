import './index.css'

function shelter() {
    return (
        <div class='text-white'>
            <title>
                Shelter Resources
            </title>
            <h1 class='text-left' style={{fontSize: '28px' ,paddingLeft: '50px', display: 'flex'}}>
                <a href='App.js'>NextDoorHub</a> <span style={{position: "absolute", left: '47%'}}>Shelter</span>
            </h1>
            <hr style={{border: 'none', height: '5px', backgroundColor: '#A92CE8'}}></hr>
            <br></br>
            <p style={{fontSize: '24px',paddingLeft: '50px'}}>
                <span style={{border: '5px solid #A92CE8', borderRadius: '10px', padding: '5px 5px'}}>Filter</span>
            </p>
            <br></br>
            <br></br>
            <p style={{fontSize: '24px', paddingLeft: '50px'}}>
                <span style={{border: '5px solid #A92CE8', borderRadius: '10px', padding: '5px 5px'}}>Mile Radius: <input type='text' placeholder='Enter a number' style={{backgroundColor: 'black', textAlign: 'center'}}></input> </span>
            </p>
        </div>
    )
}

export default shelter;