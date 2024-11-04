import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <main>
      <div className="container">
        <div className="flex-row justify-center items-center h-full">
          <div className="columns-4"></div>
        </div>
      </div>
    </main>
  );
}
