import MultiSelect from './components/MultiSelect'

const TSelect = {
  SINGLE: 'SINGLE',
  MULTI: 'MULTI'
}

const apiData = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  "Option 9",
]

function App() {

  return (
    <div className='h-full w-full flex flex-col items-center'>
      <div className='w-fit'>
        <p className='font-bold'>Single Select</p>
        <MultiSelect
          searchAble={true}
          data={apiData}
          type={TSelect.SINGLE}
        />
      </div >
      <div className="h-10"></div>
      <div className='w-fit'>
        <p className='font-bold'>Multi Select</p>
        <MultiSelect
          searchAble={true}
          data={apiData}
          type={TSelect.MULTI}
        />
      </div>
    </div >
  )
}

export default App
