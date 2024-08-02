import React from 'react'

const App = () => {
	const relativeList = ['Shyam', 'Ram', 'Hari', 'Sita']
	return (
		<div id='main'>
			{/* Do not remove the main div */}
			<ol id='relativeList' key='relativeList'>
				{relativeList.map((relative, index) => (
					<li
						id={`relativeListItem${index + 1}`}
						key={`relativeListItem${index + 1}`}
					>
						{relative}
					</li>
				))}
			</ol>
		</div>
	)
}

export default App
