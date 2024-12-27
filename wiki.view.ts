namespace $.$$ {
	export class $audetv_wiki extends $.$audetv_wiki {

		@ $mol_mem_key
		Note( id: string ) {
			return this.Store().sub( 'note=' + id, super.Note )
		}

		note_id() {
			return this.$.$mol_state_arg.value( '' ) ?? ''
		}

		Note_current() {
			return this.Note( this.note_id() )
		}

		details( next?: string ): string {
			// return this.$.$mol_state_local.value( 'details', next ) ?? ''
			return this.Note_current().details( next ) ?? ''
		}
	}

}
