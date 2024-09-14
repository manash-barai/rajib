import { RiWhatsappFill } from "react-icons/ri";

const WhatsappForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="login flex-1">
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <p>Enter WhatsApp Number</p>
          <div className="relative">
            <input
              type="number"
              name="whatsappNumber"
              placeholder="Enter WhatsApp Number"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="w-full my-2 py-2 px-10 border border-slate-800 rounded"
              required
            />
            <div className="absolute top-4 start-2">
              <RiWhatsappFill size={25} color="green" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-center text-white py-2 bg-slate-800"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default WhatsappForm;
