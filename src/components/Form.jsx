function Form({ children, onSetSubmit }) {
  return (
    <form onSubmit={onSetSubmit}>
      {children}
      <button>confirm</button>
    </form>
  );
}

export default Form;
