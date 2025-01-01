namespace $.$$ {
	export class $audetv_wiki extends $.$audetv_wiki {

		// Whole database
		@$mol_mem
		glob() {
			return this.$.$hyoo_crus_glob
		}

		@$mol_mem_key
		note( ref: $hyoo_crus_ref ) {
			return this.glob().Node( ref, $audetv_wiki_note )
		}

		note_current() {
			const str = this.$.$mol_state_arg.value( '' )
			if( !str ) return null!
			const ref = $hyoo_crus_ref( str )
			return this.note( ref )
		}

		note_title( next?: string ) {
			return this.note_current()?.title( next ) ?? ''
		}

		note_body( next?: string ) {
			return this.note_current()?.Body( next )?.value( next ) ?? ''
		}

		note_body_selection( next?: readonly [ begin: number, end: number ] ) {
			return this.note_current()?.body_selection( next ) ?? [ 0, 0 ]
		}

		note_changed_moment() {
			return this.note_current()?.last_change() ?? null!
		}

		@$mol_mem
		add() {

			const land = this.glob().land_grab( $hyoo_crus_rank_orgy )

			this.$.$mol_dom_context.location.href = '#!=' + land.ref().description
			this.editing( true )
		}

		@$mol_mem
		profile_arg() {
			return {
				'': this.glob().home().hall_by(
					$audetv_wiki_note, $hyoo_crus_rank_public
				)!.ref().description
			}
		}

		@$mol_mem
		editing( next?: boolean ) {
			return this.$.$mol_state_history.value( 'edit', next ) ?? false
		}

		edit_close() {
			this.editing( false )
		}

		@$mol_mem
		safe( next?: boolean ) {
			const arg = next == undefined ? undefined : next ? '' : null
			return this.$.$mol_state_arg.value( 'wiki_meta_key', arg) !== null
		}

		safe_close() {
			return this.safe( false )
		}

		@$mol_mem
		person() {
			return this.$.$hyoo_crus_glob.home( $audetv_wiki_person )
		}

		@$mol_mem
		person_id() {
			return this.person().ref().description!
		}

		@$mol_mem
		profile() {

			// const realm = this.realm().home().hall_by( $audetv_wiki_person, {} )
			// console.log( realm )
			// const id = this.$.$mol_state_arg.value( 'profile' )
			const id = this.person().ref().description!
			if ( !id ) return null!

			const ref = $hyoo_crus_ref( id )
			return this.$.$hyoo_crus_glob.Node( ref, $audetv_wiki_person )
		}

		@ $mol_mem
		click_profile( next?: boolean ) {
			return this.$.$mol_state_history.value( 'edit_profile', next ) ?? false
		}

		@$mol_mem
		pages() {
			return [
				this.View_page(),
				... this.editing() ? [ this.Edit_page() ] : [],
				... this.safe() ? [ this.Safe_page() ] : [],
				// ... super.pages(),
				... this.click_profile() ? [ this.Profile_page( this.profile() ) ] :  [],
				// ... this.click_profile() ? [this.Profile_page( this.click_profile() )] : []
			]
		}
	}

}
