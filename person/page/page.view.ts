namespace $.$$ {
	export class $audetv_wiki_person_page extends $.$audetv_wiki_person_page {
		override id() {
			return this.person().ref().description!
		}

		override key() {

			// console.log( this.$.$hyoo_crus_auth.current().toString() )
			// console.log( this.$.$hyoo_crus_glob.home().Hall()?.land().key()?.toString() )

			return this.person().land().key()?.toString() ?? ''
		}

		person_body( next?: string ) {
			return this.person().Body( next )?.value( next ) ?? ''
		}
	}
}
