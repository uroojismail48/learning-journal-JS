Category        |        	Methods
Create	         |          create, assign, fromEntries
Read	          |         keys, values, entries
Check	           |        hasOwn, hasOwnProperty
Modify	            |       defineProperty
Lock	                |   freeze, seal
PrototypegetPrototypeOf  |  Compareis

Notess//
Object.freeze() = fully immutable
Object.seal() = partially mutable
Object.assign() = shallow copy only
Object.entries() + map() = powerful transformation