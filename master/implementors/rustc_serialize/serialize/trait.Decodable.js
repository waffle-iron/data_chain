(function() {var implementors = {};
implementors['url'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='url/struct.Url.html' title='url::Url'>Url</a>",];implementors['bincode'] = ["impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='bincode/struct.RefBox.html' title='bincode::RefBox'>RefBox</a>&lt;'static, T&gt;","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='bincode/struct.StrBox.html' title='bincode::StrBox'>StrBox</a>&lt;'static&gt;","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='bincode/struct.SliceBox.html' title='bincode::SliceBox'>SliceBox</a>&lt;'static, T&gt;",];implementors['sodiumoxide'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.SecretKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PublicKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PrecomputedKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PrecomputedKey'>PrecomputedKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Seed.html' title='sodiumoxide::crypto::sign::ed25519::Seed'>Seed</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.SecretKey.html' title='sodiumoxide::crypto::sign::ed25519::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.PublicKey.html' title='sodiumoxide::crypto::sign::ed25519::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Signature.html' title='sodiumoxide::crypto::sign::ed25519::Signature'>Signature</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.Scalar.html' title='sodiumoxide::crypto::scalarmult::curve25519::Scalar'>Scalar</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.GroupElement.html' title='sodiumoxide::crypto::scalarmult::curve25519::GroupElement'>GroupElement</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha512/struct.Digest.html' title='sodiumoxide::crypto::hash::sha512::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha256/struct.Digest.html' title='sodiumoxide::crypto::hash::sha256::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Key.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Key.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Tag.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.Salt.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::Salt'>Salt</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.HashedPassword.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::HashedPassword'>HashedPassword</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Key.html' title='sodiumoxide::crypto::stream::xsalsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::xsalsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Key.html' title='sodiumoxide::crypto::stream::aes128ctr::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Nonce.html' title='sodiumoxide::crypto::stream::aes128ctr::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Key.html' title='sodiumoxide::crypto::stream::salsa208::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa208::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Key.html' title='sodiumoxide::crypto::stream::salsa2012::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa2012::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Key.html' title='sodiumoxide::crypto::stream::salsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Key.html' title='sodiumoxide::crypto::stream::chacha20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Nonce.html' title='sodiumoxide::crypto::stream::chacha20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Digest.html' title='sodiumoxide::crypto::shorthash::siphash24::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Key.html' title='sodiumoxide::crypto::shorthash::siphash24::Key'>Key</a>",];implementors['xor_name'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='xor_name/struct.XorName.html' title='xor_name::XorName'>XorName</a>",];implementors['data_chain'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='data_chain/block/struct.Block.html' title='data_chain::block::Block'>Block</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='data_chain/data_chain/struct.DataChain.html' title='data_chain::data_chain::DataChain'>DataChain</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='data_chain/node_block/struct.NodeBlock.html' title='data_chain::node_block::NodeBlock'>NodeBlock</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
