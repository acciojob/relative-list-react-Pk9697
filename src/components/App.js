import React from 'react'

const App = () => {
	const relativeList = ['Shyam', 'Ram', 'Hari', 'Sita']
	return (
		<div id='main'>
			{/* Do not remove the main div */}
			<ul key='relativeList'>
				{relativeList.map((relative, index) => (
					<li key={`relativeListItem${index + 1}`}>{relative}</li>
				))}
			</ul>
		</div>
	)
}

export default App
