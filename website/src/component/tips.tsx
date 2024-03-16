import Header from "./header";

export default function Tips(){
    return (
        <>
        <Header/>
        <body className="bg-gray-100 p-10">
    <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold mb-4">Welcome to our Group!</h1>
            <p className="text-gray-700 mb-6">Welcome to all new members joining our group. We provide the first result and
                tips for all newcomers.</p>
            <p className="text-red-500 font-bold mb-6">Note: Avoid any payment to prevent falling into fraudulent activities.
            </p>
            <hr className="my-6"/>
            <h2 className="text-xl font-bold mb-4">Latest Updates</h2>
            <p className="text-gray-700 mb-4">Stay tuned for the latest tips and results. Refresh the page for updates.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Join WhatsApp Group</button>
        </div>
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Solid Tips for 3rd Bazi</h2>
            <p className="text-gray-700">Solid tips for the 3rd bazi will be provided soon. Please wait for updates.</p>
        </div>
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Free Tips</h2>
            <p className="text-gray-700">Join our WhatsApp group for free tips. Refresh the page for updates.</p>
        </div>
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Game Tips</h2>
            <p className="text-gray-700">Game tips are updated on this page. Visit this page before every game for
                ?? Dada ?? tips. Many people are winning. Tips for the next game are posted here anytime, so visit this
                page or bookmark it.</p>
        </div>
    </div>
</body>
        </>
    )
}