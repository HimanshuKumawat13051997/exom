

export const Menu = () => {

    return (
        <div className="h-[150px] bg-white absolute top-[40.4px] w-[200px] z-10 shadow-xl">
        <div className="flex flex-col justify-between p-4">
            <ul className="flex flex-col justify-between text-sm">
                <li className="hover:text-gray-500">Women</li>
                <li className="hover:text-gray-500">Men</li>
                <li className="hover:text-gray-500">Returns</li>
                <li className="hover:text-gray-500">Orders</li>
                <li className="hover:text-gray-500">Profile</li>
                <li className="hover:text-gray-500">Contact</li>
            </ul>
        </div>
        </div>
    )
}