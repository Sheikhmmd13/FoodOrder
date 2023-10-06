import FoodsList from "../Components/Foods/FoodsList";

function OrderFoodPage() {
    return <div className=" w-3/5 h-5/6 mx-auto flex flex-col items-center justify-center max-md:w-4/5 max-sm:w-full">
        <h2 className="py-4 text-3xl font-bold text-white uppercase">Today Foods</h2>
        <FoodsList />
    </div>
}
export default OrderFoodPage;