import { Dispatch } from "react";
import { formartCurrency } from "../hepers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          <p>La orden esta vacia</p>
        ) : (
          order.map((item) => (
            <div
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
              key={item.id}
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formartCurrency(item.price)}
                </p>
                <p className="font-black ">
                  Cntidad : {item.quantity} -{" "}
                  {formartCurrency(item.price * item.quantity)}
                </p>
              </div>

              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() =>
                  dispatch({ type: "remove-item", payload: { id: item.id } })
                }
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
