import {IVersion} from "../models";

/**
 * An enum that contains all documentation versions.
 */
enum VERSIONS {
    "1.0.0" = "v1.0.0",
    "2.0.0" = "v2.0.0"
}

/**
 * The base route for the documentation version modules.
 */
const baseDocsRoute = "";

/**
 * Resolves the given post route to a full route relative to its version.
 * @param version The documentation version for which the post belongs.
 * @param postRoute The post route to be resolved to a full route relative to its version.
 */
function resolveRoute(version: VERSIONS, postRoute: string): string {
    return `${baseDocsRoute}/${version}/${postRoute}`;
}

/**
 * An array of all documentation versions.
 */
export const Versions: IVersion[] = [
    {
        id: "1.0.0",
        version: "v1.0.0",
        groups: [
            {
                title: "Introduction",
                posts: [
                    {
                        id: "getting-started",
                        title: "Getting Started",
                        route: resolveRoute(VERSIONS["1.0.0"], "getting-started"),
                        sections: [
                            {
                                id: "installation",
                                title: "Installation"
                            },
                            {
                                id: "basic-guid",
                                title: "Basic guid"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Name-Space",
                posts: [
                    {
                        id: "validator-class",
                        title: "Validator Class",
                        route: resolveRoute(VERSIONS["1.0.0"], "validator-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "create",
                                title: "Create(model, \"propertyName\")",
                                isCode: true
                            }
                        ]
                    },
                    {
                        id: "validation-error-class",
                        title: "ValidatorError Class",
                        route: resolveRoute(VERSIONS["1.0.0"], "validation-error-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "property-name",
                                title: "PropertyName",
                                isCode: true
                            },
                            {
                                id: "error-messages",
                                title: "ErrorMessages",
                                isCode: true
                            }
                        ]
                    },
                    {
                        id: "validation-result-class",
                        title: "ValidatorResult Class",
                        route: resolveRoute(VERSIONS["1.0.0"], "validation-result-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "validate",
                                title: "Validate(validators)",
                                isCode: true
                            },
                            {
                                id: "result",
                                title: "Result(validators)",
                                isCode: true
                            }
                        ]
                    }
                ]
            },
            {
                title: "Validation",
                posts: [
                    {
                        id: "is-length-func",
                        title: ".IsLength()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-length-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "min-length-func",
                        title: ".MinLength()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "min-length-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "max-length-func",
                        title: ".MaxLength()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "max-length-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "contains-func",
                        title: ".Contains()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "contains-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "starts-with-func",
                        title: ".StartsWith()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "starts-with-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "ends-with-func",
                        title: ".EndsWith()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "ends-with-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "matches-func",
                        title: ".Matches()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "matches-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "white-list-func",
                        title: ".WhiteList()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "white-list-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "black-list-func",
                        title: ".BlackList()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "black-list-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-alpha-func",
                        title: ".IsAlpha()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-alpha-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-alpha-numeric-func",
                        title: ".IsAlphaNumeric()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-alpha-numeric-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-ascii-func",
                        title: ".IsASCII()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-ascii-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-email-func",
                        title: ".IsEmail()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-email-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-base64-func",
                        title: ".IsBase64()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-base64-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-credit-card-func",
                        title: ".IsCreditCard()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-credit-card-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-postal-code-func",
                        title: ".IsPostalCode()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-postal-code-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-guid-func",
                        title: ".IsGuid()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-guid-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-mac-address-func",
                        title: ".IsMACAddress()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-mac-address-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-not-null-func",
                        title: ".IsNotNull()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-not-null-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "min-func",
                        title: ".Min()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "min-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "max-func",
                        title: ".Max()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "max-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-in-range-func",
                        title: ".IsInRange()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-in-range-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-url-func",
                        title: ".IsUrl()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-url-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-file-uri-func",
                        title: ".IsFileUri()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-file-uri-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-fqdn-func",
                        title: ".IsFQDN()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-fqdn-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-ip-func",
                        title: ".IsIP()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-ip-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-isbn-func",
                        title: ".IsISBN()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-isbn-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-isrc-func",
                        title: ".IsISRC()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-isrc-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-issn-func",
                        title: ".IsISSN()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-issn-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-lat-lang-func",
                        title: ".IsLatLang()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-lat-lang-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-port-func",
                        title: ".IsPort()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-port-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "optional-func",
                        title: ".Optional()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "optional-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "custom-validator-func",
                        title: ".CustomValidator()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "custom-validator-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                ]
            },
            {
                title: "Sanitization",
                posts: [
                    {
                        id: "sanitization-introduction",
                        title: "Sanitization Introduction",
                        route: resolveRoute(VERSIONS["1.0.0"], "sanitization-introduction"),
                        sections: [
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "to-lower-func",
                        title: ".ToLower()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "to-lower-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "to-upper-func",
                        title: ".ToUpper()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "to-upper-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "to-utc-func",
                        title: ".ToUtc()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "to-utc-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "trim-func",
                        title: ".Trim()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "trim-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "trim-start-func",
                        title: ".TrimStart()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "trim-start-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "trim-end-func",
                        title: ".TrimEnd()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "trim-end-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "custom-sanitizer-func",
                        title: ".CustomSanitizer()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "custom-sanitizer-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                ]
            },
            {
                title: "Advanced",
                posts: [
                    {
                        id: "full-model-validation",
                        title: "Full Model Validation",
                        route: resolveRoute(VERSIONS["1.0.0"], "full-model-validation"),
                        sections: [
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "validate-vs-result",
                        title: "Validate() vs Result()",
                        route: resolveRoute(VERSIONS["1.0.0"], "validate-vs-result"),
                        sections: [
                            {
                                id: "how-to-use",
                                title: "How to Use?"
                            },
                            {
                                id: "validate",
                                title: ".Validate()",
                                isCode: true
                            },
                            {
                                id: "result",
                                title: ".Result()",
                                isCode: true
                            }
                        ]
                    },
                ]
            },
            {
                title: "Development",
                posts: [
                    {
                        id: "release-notes",
                        title: "Release Notes",
                        route: resolveRoute(VERSIONS["1.0.0"], "release-notes"),
                    },
                    {
                        id: "why-dotnet-validator",
                        title: "Why DotNet Validator?",
                        route: resolveRoute(VERSIONS["1.0.0"], "why-dotnet-validator"),
                    },
                    {
                        id: "contributors",
                        title: "Contributors",
                        route: resolveRoute(VERSIONS["1.0.0"], "contributors"),
                    }
                ]
            }
        ]
    },
    {
        id: "2.0.0",
        version: "v2.0.0",
        groups: [
            {
                title: "Introduction",
                posts: [
                    {
                        id: "getting-started",
                        title: "Getting Started",
                        route: resolveRoute(VERSIONS["2.0.0"], "getting-started"),
                        sections: [
                            {
                                id: "installation",
                                title: "Installation"
                            },
                            {
                                id: "basic-guid",
                                title: "Basic guid"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Name-Space",
                posts: [
                    {
                        id: "validator-class",
                        title: "Validator Class",
                        route: resolveRoute(VERSIONS["2.0.0"], "validator-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "create",
                                title: "Create(model, \"propertyName\")",
                                isCode: true
                            }
                        ]
                    },
                    {
                        id: "validation-error-class",
                        title: "ValidatorError Class",
                        route: resolveRoute(VERSIONS["2.0.0"], "validation-error-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "property-name",
                                title: "PropertyName",
                                isCode: true
                            },
                            {
                                id: "error-messages",
                                title: "ErrorMessages",
                                isCode: true
                            }
                        ]
                    },
                    {
                        id: "validation-result-class",
                        title: "ValidatorResult Class",
                        route: resolveRoute(VERSIONS["2.0.0"], "validation-result-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "validate",
                                title: "Validate(validators)",
                                isCode: true
                            },
                            {
                                id: "result",
                                title: "Result(validators)",
                                isCode: true
                            }
                        ]
                    }
                ]
            },
            {
                title: "Validation",
                posts: [
                    {
                        id: "is-length-func",
                        title: ".IsLength()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-length-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "min-length-func",
                        title: ".MinLength()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "min-length-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "max-length-func",
                        title: ".MaxLength()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "max-length-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "contains-func",
                        title: ".Contains()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "contains-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "starts-with-func",
                        title: ".StartsWith()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "starts-with-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "ends-with-func",
                        title: ".EndsWith()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "ends-with-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "matches-func",
                        title: ".Matches()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "matches-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "white-list-func",
                        title: ".WhiteList()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "white-list-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "black-list-func",
                        title: ".BlackList()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "black-list-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-alpha-func",
                        title: ".IsAlpha()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-alpha-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-alpha-numeric-func",
                        title: ".IsAlphaNumeric()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-alpha-numeric-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-ascii-func",
                        title: ".IsASCII()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-ascii-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-email-func",
                        title: ".IsEmail()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-email-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-base64-func",
                        title: ".IsBase64()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-base64-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-credit-card-func",
                        title: ".IsCreditCard()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-credit-card-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-postal-code-func",
                        title: ".IsPostalCode()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-postal-code-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-guid-func",
                        title: ".IsGuid()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-guid-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-mac-address-func",
                        title: ".IsMACAddress()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-mac-address-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-not-null-func",
                        title: ".IsNotNull()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-not-null-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "min-func",
                        title: ".Min()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "min-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "max-func",
                        title: ".Max()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "max-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-in-range-func",
                        title: ".IsInRange()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-in-range-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-url-func",
                        title: ".IsUrl()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-url-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-file-uri-func",
                        title: ".IsFileUri()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-file-uri-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-fqdn-func",
                        title: ".IsFQDN()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-fqdn-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-ip-func",
                        title: ".IsIP()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-ip-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            },
                            {
                                id: "example3",
                                title: "Example 3"
                            }
                        ]
                    },
                    {
                        id: "is-isbn-func",
                        title: ".IsISBN()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-isbn-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-isrc-func",
                        title: ".IsISRC()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-isrc-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-issn-func",
                        title: ".IsISSN()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-issn-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-lat-long-func",
                        title: ".IsLatLong()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-lat-long-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-port-func",
                        title: ".IsPort()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "is-port-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "optional-func",
                        title: ".Optional()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "optional-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "custom-validator-func",
                        title: ".CustomValidator()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "custom-validator-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                ]
            },
            {
                title: "Sanitization",
                posts: [
                    {
                        id: "sanitization-introduction",
                        title: "Sanitization Introduction",
                        route: resolveRoute(VERSIONS["2.0.0"], "sanitization-introduction"),
                        sections: [
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "to-lower-func",
                        title: ".ToLower()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "to-lower-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "to-upper-func",
                        title: ".ToUpper()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "to-upper-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "to-utc-func",
                        title: ".ToUtc()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "to-utc-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "trim-func",
                        title: ".Trim()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "trim-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "trim-start-func",
                        title: ".TrimStart()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "trim-start-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "trim-end-func",
                        title: ".TrimEnd()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "trim-end-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            }
                        ]
                    },
                    {
                        id: "custom-sanitizer-func",
                        title: ".CustomSanitizer()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["2.0.0"], "custom-sanitizer-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                ]
            },
            {
                title: "Advanced",
                posts: [
                    {
                        id: "full-model-validation",
                        title: "Full Model Validation",
                        route: resolveRoute(VERSIONS["2.0.0"], "full-model-validation"),
                        sections: [
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "validate-vs-result",
                        title: "Validate() vs Result()",
                        route: resolveRoute(VERSIONS["2.0.0"], "validate-vs-result"),
                        sections: [
                            {
                                id: "how-to-use",
                                title: "How to Use?"
                            },
                            {
                                id: "validate",
                                title: ".Validate()",
                                isCode: true
                            },
                            {
                                id: "result",
                                title: ".Result()",
                                isCode: true
                            }
                        ]
                    },
                ]
            },
            {
                title: "Development",
                posts: [
                    {
                        id: "release-notes",
                        title: "Release Notes",
                        route: resolveRoute(VERSIONS["2.0.0"], "release-notes"),
                    },
                    {
                        id: "why-dotnet-validator",
                        title: "Why DotNet Validator?",
                        route: resolveRoute(VERSIONS["2.0.0"], "why-dotnet-validator"),
                    },
                    {
                        id: "contributors",
                        title: "Contributors",
                        route: resolveRoute(VERSIONS["2.0.0"], "contributors"),
                    }
                ]
            }
        ]
    }
];
