{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  NIX_SHELL = "meshcloud-cloudfoundation";
  shellHook = ''
    echo starting meshcloud cloudfoundation shell
  '';

  buildInputs = [    

    # node / typescript (meshPanel, utilities eetc.)
    pkgs.nodejs-16_x
    (pkgs.yarn.override {
        nodejs = pkgs.nodejs-16_x;
    })

    # dhall (meshStack config model)
    pkgs.dhall
    pkgs.dhall-nix
    pkgs.dhall-json
    pkgs.dhall-lsp-server
  ];
}
