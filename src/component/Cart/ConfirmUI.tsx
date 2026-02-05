import confirmIcon from "/images/icon-order-confirmed.svg";
import Button from "../Button";

type ConfirmUIProps = {
  children?: React.ReactNode;
};

const ConfirmUI = ({ children }: ConfirmUIProps) => {
  return (
    <main className="space-y-3 bg-white w-[30%] p-5 rounded-lg ">
      <section>
        <img src={confirmIcon} alt="" />
        <h1 className="font-bold text-2xl">Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
      </section>
      <section className="bg-orange-300 overflow-scroll h-90">
        {children}
      </section>
      <section>
        <Button text="Start New Cart" style="text-white text-center bg-hover p-2" />
      </section>
    </main>
  );
};

export default ConfirmUI;
