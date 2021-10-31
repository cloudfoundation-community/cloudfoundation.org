{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  NIX_SHELL = "meshcloud-docs";
  shellHook = ''
    echo starting meshcloud docs shell
  '';

  buildInputs = [    

    # node / typescript (meshPanel, utilities eetc.)
    pkgs.nodejs-14_x
    (pkgs.yarn.override {
        nodejs = pkgs.nodejs-14_x;
    })

    # dhall (meshStack config model)
    pkgs.dhall
    pkgs.dhall-nix
    pkgs.dhall-json
    pkgs.dhall-lsp-server
  ];
}
