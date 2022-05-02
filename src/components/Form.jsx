import downloadIcon from '../images/downloadIcon.svg';

const Form = ({inputFile, username, setInputFile, setUsername, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome</h1>
      <p>Please complete your details, and upload your data to the platform.</p>
      <label htmlFor="name">What is your name?</label>
      <input 
        type="text"
        id="name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <label htmlFor="file">
        Please upload your data
        <div className="download-wrapper">
          <img src={downloadIcon} alt="download" />
          <span>{inputFile.name}</span>
        </div>
      </label>
      <input 
        type="file"
        id="file"
        // value={inputFile.name}
        onChange={(e) => setInputFile(e.target.files[0])}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;
