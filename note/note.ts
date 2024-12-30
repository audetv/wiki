namespace $ {

	export class $audetv_wiki_note extends $hyoo_crus_entity.with({
		Body: $hyoo_crus_text,
		// Source: $hyoo_crus_atom_str
	}) {

		body_selection(next?: readonly [ begin: number, end: number ]) {
			return this.Body(next)?.selection( this.land().auth().lord(), next )
		}
	}
}
