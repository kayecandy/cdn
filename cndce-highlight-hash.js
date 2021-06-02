
class CndceHighlightHash{

	constructor(hashes = []){
		const currentHash = hashes.find(({name})=> '#' + name == location.hash);


		if(currentHash){
			window.addEventListener('load', function(){
				const {
					style = {
						backgroundColor: 'yellow',
						padding: '0 1rem'
					}
				} = currentHash;

				// Dirty way to override blogger auto scroll
			    setTimeout(function(){
			        var domHash = document.getElementById(currentHash.name);

			        window.scrollTo(0, domHash.getBoundingClientRect().top + window.scrollY - 20);

			        Object.assign(domHash.style, style);


			    }, 500);
			})
		}

	}
}