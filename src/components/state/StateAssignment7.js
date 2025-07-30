import React,{useState ,useEffect} from 'react'

export default function StateAssignment7() {

  const [isDark, setIsDark] = useState(false); // false = light mode

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#121212' : '#ffffff';
    document.body.style.color = isDark ? '#ffffff' : '#000000';
  }, [isDark]);

  return (
    <div>

      <button className="btn btn-primary" onClick={toggleTheme}>
        Toggle Dark Mode
      </button>

    </div>
  );
}
