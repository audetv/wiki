namespace $.$$ {
	export class $audetv_wiki_person_page extends $.$audetv_wiki_person_page {
		override id() {
			return this.person().ref().description!
		}

		override key() {
			return this.person().land().key()?.toString() ?? ''
		}
	}
}
