namespace $.$$ {
	export class $audetv_wiki_meta_safe extends $hyoo_meta_safe {	
		
		@ $mol_mem
		key_new() {
			
			const serial = this.key_import()
			if( !serial ) return null
			
			try {
			
				const pack = $mol_base64_decode( serial )
				const closed = pack.slice( 0, this.key_size() )
				const salt = $mol_crypto_hash( pack.slice( this.key_size() ) ).slice( 0, 16 )
				
				const pass = this.password()
				const secret = $mol_wire_sync( this.$.$mol_crypto_secret ).pass( pass, salt )
				const opened = $mol_wire_sync( secret ).decrypt( closed, salt )
				
				return $mol_charset_decode( opened )
				
			} catch( error ) {
				
				$mol_fail_log( error )
				return null
				
			}
			
		}
		
		@$mol_action
		import_switch() {
			const key_new = this.key_new()
			
			this.password( '' )
			this.key_import( null ) // 
			// this.$.$mol_wait_rest() // wait for url sync
			this.$.$mol_state_local.value( '$hyoo_crus_auth', key_new )
			// this.$.$mol_dom_context.location.reload() // peer isn't reactive yet
		}

		@$mol_mem
		key_export() {

			const pass = this.password()
			const recall = $mol_charset_encode( this.recall() )

			const salt = $mol_crypto_hash( recall ).slice( 0, 16 )
			const secret = $mol_wire_sync( this.$.$mol_crypto_secret ).pass( pass, salt )

			const key = this.$.$mol_state_local.value( '$hyoo_crus_auth' )

			// const open = this.$.$mol_charset_encode( this.yard().peer().key_private_serial )
			const open = this.$.$mol_charset_encode( key as string )
			const closed = new Uint8Array( $mol_wire_sync( secret ).encrypt( open, salt ) )

			const pack = new Uint8Array( this.key_size() + recall.byteLength )
			pack.set( closed, 0 )
			pack.set( recall, this.key_size() )

			return this.$.$mol_base64_encode( pack )

		}
	}
}
