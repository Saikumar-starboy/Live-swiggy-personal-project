const Contact = () => {
    return (
        <div className="mt-28">
            <h1 className="p-3 text-xl font-bold">Contact Us !</h1>
            <input placeholder="name" className="border border-black p-2 rounded-lg m-2"/>
            <input placeholder="phone" className="border border-black p-2 rounded-lg m-2"/>
            <button className="border border-black p-2 rounded-lg m-2 bg-blue-400">Submit</button>
        </div>
    );
}

export default Contact;