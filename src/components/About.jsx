import React from 'react'

export default function About(props) {

  // const [myStyle, setMyStyle] = useState(  {
  //   color: "black",
  //   backgroundColor:"white"
  // })  
  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    border: '1px solid',
    borderColor: props.mode === 'dark'?'white':'#042743',
  }

  return (
    <div className='container' >
      <h1 className='my-3' style={{ color: props.mode === 'dark'?'white':'#042743'}} >About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="card" style={myStyle}>
          <div className="card-header" id="headingOne">
          <h2 className="mb-0" >
          <button  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
              <strong>Text Analysis</strong>
          </button>
          </h2>
          </div>

        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body" style={myStyle}>
          The Text Analysis feature in our TextCraft app empowers you to gain deeper insights into your text. It includes various analytical tools such as sentiment analysis, keyword extraction, and readability assessment. By leveraging advanced natural language processing algorithms, our app can help you understand the emotional tone of your text, identify prominent keywords, and evaluate the readability level of your content. Whether you're an author, content creator, or simply want to enhance your writing skills, our Text Analysis tools can provide valuable feedback and improve the overall quality of your text.</div>
        </div>
        </div>
  <div className="card" style={myStyle} >
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0" >
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo"  aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to use</strong>
        </button>
      </h2>
    </div>
    <div id="collapseTwo" style={myStyle} className="collapse" aria-labelledby="headingTwo"  data-parent="#accordionExample">
      <div className="card-body">
      TextCraft is a free character counter tool that provides instant character count & word count statistics for a given
      text. TextCraft reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingThree">
      <h2 className="mb-0"  >
        <button className="btn btn-link collapsed" type="button"   data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong>
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse"  style={myStyle} aria-labelledby="headingThree"  data-parent="#accordionExample">
      <div className="card-body">
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
      suits to count characters in facebook, blog, books, excel document, pdf docunent, essays, etc.</div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingFour">
      <h2 className="mb-0"  >
        <button className="btn btn-link collapsed" type="button"   data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          <strong>Text Manipulation</strong>
        </button>
      </h2>
    </div>
    <div id="collapseFour" className="collapse"  style={myStyle} aria-labelledby="headingFour"  data-parent="#accordionExample">
      <div className="card-body">
      Text Manipulation is a powerful feature of our TextCraft app that allows you to easily modify and transform your text. Whether you need to convert text to uppercase or lowercase, remove unwanted spaces, add line breaks, our app provides a wide range of text manipulation tools. With just a few clicks, you can effortlessly manipulate your text to meet your specific requirements, saving you time and effort.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
