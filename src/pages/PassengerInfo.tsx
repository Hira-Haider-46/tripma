import SelectedFlightsInfo from "../components/SelectedFlightsInfo";

const PassengerInfo: React.FC = () => {
  return (
    <div className="px-15 py-10 w-full flex flex-col md:flex-row gap-5">
      <div className="border w-full md:w-3/5 p-2">
        <h1>Passenger Information</h1>
        <p>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>
        <form>

        </form>
      </div>
      <div className="w-full md:w-2/5 md:pt-40">
        <SelectedFlightsInfo />
      </div>
    </div>
  )
}

export default PassengerInfo;