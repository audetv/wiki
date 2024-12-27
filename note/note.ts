namespace $ {

	export class $audetv_wiki_note extends $mol_store<{
		deatils: string
		changed_moment: string //2021-01-01T10:00:00.000Z
	}> {

		details( next?: string ): string {
			return this.value( 'deatils' ) ?? ''
		}

		@ $mol_mem
		changed_moment( next?: $mol_time_moment ) {
			const str = this.value( 'changed_moment', next && next.toString() )
			return str ? new $mol_time_moment( str ) : null
		}
	}
}
