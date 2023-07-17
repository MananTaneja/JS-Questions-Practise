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
    <div className='h-full w-full'>
      <div className='flex justify-center bg-red'>
        <MultiSelect
          searchAble={true}
          data={apiData}
          type={TSelect.SINGLE}
        />

      </div>
    </div>
  )
}

export default App
