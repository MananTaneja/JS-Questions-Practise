import File from './File'
import Folder from './Folder'

function Explorer({ folderStructure }) {
	console.log(folderStructure)
	return (
		<>
			<Folder name={folderStructure.name} />
			{folderStructure.items.map((it) =>
				it.isFolder ? <Folder item={it} /> : <File name={it.name} />
			)}
		</>
	)
}

export default Explorer
