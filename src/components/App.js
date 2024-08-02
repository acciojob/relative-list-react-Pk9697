import React from 'react'

const App = () => {
	const relativeList = ['Shyam', 'Ram', 'Hari', 'Sita']
	return (
		<div id='main'>
			{/* Do not remove the main div */}
			<ol key='relativeList'>
				{relativeList.map((relative, index) => (
					<li key={`relativeListItem${index + 1}`}>{relative}</li>
				))}
			</ol>
		</div>
	)
}

export default App
