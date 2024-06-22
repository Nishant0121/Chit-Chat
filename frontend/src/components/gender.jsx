export default function Gender() {
  return (
    <div className="flex justify-center items-center m-auto">
      <div className="flex justify-center items-center m-auto">
        <label htmlFor="male" className="mx-1">
          Male
        </label>
        <input type="radio" name="male" className="radio radio-primary" />
      </div>
      <div className="flex justify-center items-center m-auto">
        <label htmlFor="female" className="mx-1">
          Female
        </label>
        <input type="radio" name="female" className="radio radio-primary" />
      </div>
    </div>
  );
}
